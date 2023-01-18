import { StatsContainer, VerticalLine, TextWrap, Text, TextExpenses, TextIncomes } from "./ReportStats.styled"

export default function ReportStats() {
    return (
        <StatsContainer>
            <TextWrap>
                <Text>Expenses:</Text>
                <TextExpenses> - 18 000.00 UAH.</TextExpenses>
            </TextWrap>
            <VerticalLine />
            <TextWrap>
                <Text>Income:</Text>
                <TextIncomes> + 35 000.00 UAH.</TextIncomes>
            </TextWrap>
        </StatsContainer>
    )
}