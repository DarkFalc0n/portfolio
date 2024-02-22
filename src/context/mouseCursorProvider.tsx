"use client";

import {
  createContext,
  useReducer,
  Reducer,
  Dispatch,
  useEffect,
  useContext,
} from "react";
import { FCProps } from "../types";

interface CursorProps {
  x: number;
  y: number;
  width: string;
  height: string;
}

type CursorAction =
  | {
      type: "MOVE";
      payload: { x: number; y: number };
    }
  | { type: "SCALE"; payload: { fac: number } };

const initialCursorProps: CursorProps = {
  x: 0,
  y: 0,
  width: "12vh",
  height: "12vh",
};

const MouseCursorContext = createContext<{
  cursorProps: CursorProps;
  setCursorProps: Dispatch<CursorAction>;
} | null>(null);

const isCursorSlow = (
  xMove: number,
  yMove: number
): boolean =>
  Math.max(Math.abs(xMove), Math.abs(yMove)) < 5;

const reducer: Reducer<CursorProps, CursorAction> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case "MOVE": {
      const { xMove, yMove } = {
        xMove: payload.x - state.x,
        yMove: payload.y - state.y,
      };

      const shouldCursorResize = !isCursorSlow(
        xMove,
        yMove
      );

      const cursorDimensions = {
        width: shouldCursorResize ? "4vh" : "12vh",
        height: shouldCursorResize ? "4vh" : "12vh",
      };

      return {
        ...state,
        ...payload,
        ...cursorDimensions,
      };
    }

    case "SCALE": {
      return {
        ...state,
        width: `${12 * payload.fac}vh`,
        height: `${12 * payload.fac}vh`,
      };
    }
    default:
      return state;
  }
};

const useMouseCursor = () =>
  useContext(MouseCursorContext)!;

const MouseCursorProvider: FCProps = ({ children }) => {
  const [cursorProps, setCursorProps] = useReducer(
    reducer,
    initialCursorProps
  );
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setCursorProps({
        type: "MOVE",
        payload: {
          x: e.clientX,
          y: e.clientY,
        },
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <MouseCursorContext.Provider
      value={{ cursorProps, setCursorProps }}
    >
      {children}
    </MouseCursorContext.Provider>
  );
};

export {
  MouseCursorProvider,
  useMouseCursor,
  initialCursorProps,
};
