<template>
  <input />
</template>

<style scoped>
input {
  width: calc(100% - 16px);
  border: none;
  outline: 1px solid #D0D7DE;
  border-radius: 6px;
  padding: 0px 8px;
  height: 32px;
  letter-spacing: 1px;
  box-shadow: inset 0 1px 0px 0 #1f23284f;
}

input:placeholder {
  color: #636C76;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 20px;
}

input:focus {
  outline: 2px solid #0969DA;
}
</style>