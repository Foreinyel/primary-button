<script>
  export let onClick;
  export let children;
</script>

<button
  class="button"
  on:click={() => {
    if (onClick) {
      onClick();
    }
  }}>
{#if children}
{children}
{:else}
<slot />
{/if}  
</button>

<style>
  .button {
    background-color: red;
    border-color: #1890ff;
    -webkit-appearance: button;
    color: #fff;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px #0000000b;
    outline: 0;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    margin: 0;
    overflow: visible;
    box-sizing: border-box;
  }
</style>
