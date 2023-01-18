import { StatsContainer, VerticalLine, TextWrap, Text } from "./ReportStats.styled"

export default function ReportStats() {
    return (
        <StatsContainer>
            <TextWrap>
                <Text>Expenses:</Text>
                <Text> - 18 000.00 UAH.</Text>
            </TextWrap>
            <VerticalLine />
            <TextWrap>
                <Text>Income:</Text>
                <Text> + 35 000.00 UAH.</Text>
            </TextWrap>
        </StatsContainer>
    )
}