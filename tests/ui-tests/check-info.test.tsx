// import { render } from "@";
import React from "react";
import { describe, it, expect } from "vitest";
import {logDOM, render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import App from '../../src/App'
import 'intersection-observer';


describe("Shows the information box correctly", () => {
    // Checking the button visibility
    it('Shows the information button', () => {
        render(<App></App>)
        const button = screen.getByRole('button', {name: /\?/})
        expect(button).toBeDefined()
    })
    // Making sure the information is being presented
    it('Shows the information box when info box is clicked', async () => {
        const button = screen.getByRole('button', {name: /\?/})
        await user.click(button)
        const infoBoxTitle = screen.findByRole('heading', {level: 2})
        expect(infoBoxTitle).toBeDefined()  
    })
    // Closes the close info box when the close button is clicked
    it('correctly closes the info button when close button is clicked', async () => {
        logDOM()
        const closeButton = screen.getByRole('button', {name: /x/i});
        await user.click(closeButton)
        const infoBoxTitle = screen.queryByRole('heading', {level: 2})
        expect(infoBoxTitle).toBeNull() 
    })
})

