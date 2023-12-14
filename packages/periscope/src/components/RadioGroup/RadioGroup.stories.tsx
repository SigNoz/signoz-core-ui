import type { Meta } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

export default {
    title: "Atom/RadioGroup",
    component: RadioGroup,
    argTypes: {},
} satisfies Meta<typeof RadioGroup>;

export const Variants = () => {
    return (
    <RadioGroup defaultValue="option-one">
        <div style={{display: 'flex', alignItems:'center', gap: '0.5rem'}}>
            <RadioGroupItem value="option-one" id="option-one" />
            <label htmlFor="option-one">Checked</label>
        </div>
        <div style={{display: 'flex', alignItems:'center', gap: '0.5rem'}}>
            <RadioGroupItem value="option-two" id="option-two" />
            <label htmlFor="option-two">Unchecked</label>
        </div>
        <div style={{display: 'flex', alignItems:'center', gap: '0.5rem'}}>
            <RadioGroupItem value="option-three" id="option-three" disabled />
            <label htmlFor="option-three">Disabled Unchecked</label>
        </div>
        <div style={{display: 'flex', alignItems:'center', gap: '0.5rem'}}>
            <RadioGroupItem value="option-four" id="option-four" checked={true} disabled/>
            <label htmlFor="option-four">Disabled Checked</label>
        </div>
  </RadioGroup>
    ) 
}