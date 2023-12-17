import {css} from '@linaria/core'

export const base = css`
  display: inline-flex;
  align-items: center;
  justify-self: center;
  white-space: nowrap;

  cursor: pointer;
  border-radius: 2px;
  box-sizing: border-box;

  border: none;

  outline: none;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;

  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  line-height: 2;

  height: fit-content;
  width: fit-content;

  :disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

export const ButtonDefault = css`
  background-color: var(--color-primary);
  color: var(--color-foreground);

  &:hover {
    background-color: var(--color-primary-hover);
  }
`

export const ButtonSecondary =  css`
  background-color: var(--color-secondary);
  color:  var(--color-foreground);

  &:hover {
    background-color: var(--color-secondary-hover);
  }
`

export const ButtonWarning = css`
  background-color: var(--color-warning);
  color: var(--color-background);

  &:hover {
    background-color: var(--color-warning-hover);
  }
`
export const ButtonDanger = css`
  background-color: var(--color-danger);
  color: var(--color-foreground);

  &:hover {
    background-color: var(--color-danger-hover);
  }
`

export const ButtonBorder = css`
  background-color: transparent;
  color: var(--color-foreground);
  border: 1px solid var(--color-secondary);
`

export const ButtonBorderDashed = css`
  background-color: transparent;
  color: var(--color-foreground);
  border: 1px dashed var(--color-secondary);
`

export const ButtonBorderNone = css`
  border: none;
`

export const ButtonBorderSolid = css`
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-secondary);
`

export const ButtonLink = css`
  background-color: transparent;
  padding: 0;
  color: var(--color-primary)
`

export const ButtonGhost = css`
  background-color: transparent;
  color: var(--color-foreground);
`

export const ButtonSizeXS = css`
  font-size: 8px;
  padding: 4px 8px;
`

export const ButtonSizeSM = css`
  font-size: 12px;
  padding: 8px 1rem;
`

export const ButtonSizeMD = css`
  font-size: 12px;
  padding: 12px 1rem;
`
export const ButtonSizeLG = css`
  font-size: 1rem;
  padding: 12px 24px;
`
