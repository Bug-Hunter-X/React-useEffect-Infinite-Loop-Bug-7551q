# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop in the `useEffect` hook. The bug arises from improper handling of dependencies within the `useEffect`'s dependency array.

## Bug Description

The `MyComponent` component uses `useState` to manage a `count` variable.  An `useEffect` hook attempts to increment the `count` on every render. However, because `count` is not correctly listed in the dependency array, the effect runs continuously, leading to an infinite loop and potential performance issues. 

## Bug Solution

The solution involves correctly specifying the dependency array to ensure the `useEffect` hook only runs when necessary.  In this case, the dependency array should be empty (`[]`) if the effect should run only once after the initial render, or it should include all values from the component's state which are used within the useEffect.