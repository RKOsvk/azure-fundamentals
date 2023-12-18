import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Button} from "../components/Button";
describe('Button Component', () => {
    it('renders the button with default variants', () => {
        const { getByText } = render(<Button>Click me</Button>);
        const buttonElement = getByText('Click me');

        expect(buttonElement).toBeInTheDocument();
    });
});
