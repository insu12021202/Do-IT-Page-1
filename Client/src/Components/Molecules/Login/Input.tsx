import { useRef } from "react";

import LoginButton from "@Atoms/Button/Login";
import Input from "@Atoms/Input";

import { LoginButtonType, LoginInputType } from "@Constant/.";
import { InputContainer, Title } from "./styles";

const LoginInput = () => {
  const idRef = useRef<HTMLInputElement>();
  const pwRef = useRef<HTMLInputElement>();

  const handleLoginClick = () => {
    if (!idRef?.current || !pwRef?.current) return;

    const {
      current: { value: idValue },
    } = idRef;

    const {
      current: { value: pwValue },
    } = pwRef;

    console.log(idValue, pwValue);
  };

  return (
    <InputContainer>
      <Title>아주대학교 통합인증</Title>
      <Input
        {...LoginInputType}
        placeholder="사용자 ID를 입력해주세요."
        inputRef={idRef}
      />
      <Input
        {...LoginInputType}
        placeholder="비밀번호를 입력해주세요."
        type="password"
        inputRef={pwRef}
      />
      <LoginButton
        {...LoginButtonType}
        title="로그인"
        onClick={handleLoginClick}
      />
    </InputContainer>
  );
};

export default LoginInput;