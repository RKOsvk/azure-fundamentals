import { renderHook, act } from "@testing-library/react-hooks";
import useTimer, { Time } from '../hooks/useTimer';

jest.useFakeTimers();

describe('useTimer Hook', () => {
    it('initializes with correct remaining time', () => {
        const initialTime: Time = { minutes: 2, seconds: 30 };
        const { result } = renderHook(() => useTimer(initialTime));

        expect(result.current.remainingTime).toBe('02:30');
    });

    it('starts, stops, and resets the timer', () => {
        const initialTime: Time = { minutes: 1, seconds: 0 };
        const { result } = renderHook(() => useTimer(initialTime));

        // Start the timer
        act(() => {
            result.current.startTimer();
        });

        // Advance time by 1 second
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        // Check if remaining time is updated
        expect(result.current.remainingTime).toBe('00:59');

        // Stop the timer
        act(() => {
            result.current.stopTimer();
        });

        // Advance time by 1 second (should not affect the timer as it's stopped)
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        // Check if remaining time remains the same
        expect(result.current.remainingTime).toBe('00:59');

        // Reset the timer
        act(() => {
            result.current.resetTimer();
        });

        // Check if remaining time is reset to the initial value
        expect(result.current.remainingTime).toBe('01:00');
    });

    it('stops automatically when reaching zero', () => {
        const initialTime: Time = { minutes: 0, seconds: 2 };
        const { result } = renderHook(() => useTimer(initialTime));

        // Start the timer
        act(() => {
            result.current.startTimer();
        });

        // Advance time by 2 seconds (reaching zero)
        act(() => {
            jest.advanceTimersByTime(2000);
        });

        // Check if remaining time is updated
        expect(result.current.remainingTime).toBe('00:00');

        // Check if the timer stops automatically
        expect(result.current.remainingTime).toBe('00:00');
    });
});
