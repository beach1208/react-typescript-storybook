import React from "react";
import { storiesOf } from "@storybook/react";
import ColorButton from "./ColorButton";

storiesOf("ColorButton", module)
.add("Blue Button", () => <ColorButton color="#FFFFFF" background="#3F51B5"/>)
.add("Pink Button", () => <ColorButton color="#FFFFFF" background="#e91e63" />)