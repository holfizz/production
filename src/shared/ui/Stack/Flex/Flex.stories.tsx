import type { Meta, StoryObj } from "@storybook/react"
import Flex from "./Flex"

const meta = {
    title: "shared/Stack/Flex",
    component: Flex,
    parameters: {},
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>;

export const RowGap: Story = {
    args: {
        direction: "row",
        children: (
            <>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </>
        ),
    },
}
export const RowGap4: Story = {
    args: {
        direction: "row",
        gap: "4",
        children: (
            <>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </>
        ),
    },
}
export const RowGap8: Story = {
    args: {
        gap: "8",
        direction: "row",
        children: (
            <>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </>
        ),
    },
}
export const RowGap16: Story = {
    args: {
        gap: "16",
        direction: "row",
        children: (
            <>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </>
        ),
    },
}
export const RowGap32: Story = {
    args: {
        gap: "32",
        direction: "row",
        children: (
            <>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </>
        ),
    },
}
export const ColumnGap16: Story = {
    args: {
        gap: "16",
        direction: "column",
        children: (
            <>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </>
        ),
    },
}
export const ColumnAlignStart: Story = {
    args: {
        gap: "16",
        direction: "column",
        align: "start",
        children: (
            <>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </>
        ),
    },
}
export const ColumnAlignCenter: Story = {
    args: {
        gap: "16",
        direction: "column",
        align: "center",
        children: (
            <>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </>
        ),
    },
}
export const ColumnAlignEnd: Story = {
    args: {
        gap: "16",
        direction: "column",
        align: "end",
        children: (
            <>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
                <div>
                    <h1>Text</h1>
                </div>
            </>
        ),
    },
}
