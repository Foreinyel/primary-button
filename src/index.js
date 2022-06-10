import Component from "./Component.svelte";

const mount = (el, props) => {
  console.log(props)
  new Component({
    target: el,
    props: {
      ...props,
      $$slots: props.children
    },
  });
};

export default Component;

export { mount };

