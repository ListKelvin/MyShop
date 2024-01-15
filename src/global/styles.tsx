import styled from "styled-components";

export const MaxWidthWrapper = styled.div`
  margin: 0 10rem;
  padding-top: 5rem;
  height: 100%;
  @media not all and (min-width: 1280px) {
    .max-xl\:mx-10 {
      margin-left: 2.5rem /* 40px */;
      margin-right: 2.5rem /* 40px */;
    }
  }

  @media not all and (min-width: 768px) {
    .max-md\:mx-5 {
      margin-left: 1.25rem /* 20px */;
      margin-right: 1.25rem /* 20px */;
    }
  }
`;

/////////////////////////
/**
 * This function return the number in a pixel string
 * @param {string | undefined} str to be matched
 * @returns {number} number
 */
const parsePixelNumber = (str: string) => {
  const regex = new RegExp("([0-9]+)(px)?", "g");
  const match = regex.exec(str);
  return match ? match[1] : null;
};

export const StyledFlexbox = styled.div<{
  $justifyContent?: string;
  $alignItems?: string;
  $flexDirection?: string;
  $gap?: string;
  $position?: string;
}>`
  /* width: 100%;
  height: 100%; */
  display: flex;
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => parsePixelNumber(props.$gap ? props.$gap : "10px")}px;
  position: ${(props) => (props.$position ? props.$position : "static")};
`;
