import React from "react";
import styled from "styled-components";

interface SplitScreen {
    Left: React.ComponentType;
    Right: React.ComponentType;
}

const Container = styled.div`
    display: flex;
`;

const Panel = styled.div`
    flex: 1;
`;

export const SplitScreen = ({ Left, Right }: SplitScreen) => {
    return (
        <Container>
            <Panel>
                <Left />
            </Panel>

            <Panel>
                <Right />
            </Panel>
        </Container>
    )
}