import Component from "./Component.svelte";

const mount = (el, props) => {
  console.log(props)
  console.log(props.children.type(props.children.props))
  new Component({
    target: el,
    props: {
      ...props,
      children: props.children.type(props.children.props)
    },
  });
};

export default Component;

export { mount };

