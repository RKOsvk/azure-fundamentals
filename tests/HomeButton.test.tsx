import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HomeButton from "../components/HomeButton";

describe("HomeButton", () => {
    it("renders correctly", () => {
        const handleReturnToMainPageMock = jest.fn();
        const { getByRole } = render(
            <HomeButton handleReturnToMainPage={handleReturnToMainPageMock} />
        );

        const button = getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it("calls handleReturnToMainPage on button click", () => {
        const handleReturnToMainPageMock = jest.fn();
        const { getByRole } = render(
            <HomeButton handleReturnToMainPage={handleReturnToMainPageMock} />
        );

        const button = getByRole("button");
        fireEvent.click(button);

        expect(handleReturnToMainPageMock).toHaveBeenCalledTimes(1);
    });
});
