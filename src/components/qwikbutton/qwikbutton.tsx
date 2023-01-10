import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './qwikbutton.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  console.log('here i am')
  return (
    <>
      <h1>Hello World!</h1>
      I am a static component, there is no reason to ever download me to the client.
      <br />
      <button onClick$={() => alert('Hello')}>greet!</button>
      <hr />
      <Counter />
    </>
  );
});

export const Counter = component$(() => {
  useStylesScoped$(styles);
  const store = useStore({ activated: false });
  return (
    <>
      I am a dynamic component. Qwik will download me only when it is time to re-render me after the
      user clicks on the <tt>+1</tt> button.
      <br />
      Current count: {store.activated}
      <br />
      <button id={store.activated ? "isactive" : "notactive"} onClick$={() => store.activated = !store.activated}>+1</button>
    </>
  );
});
