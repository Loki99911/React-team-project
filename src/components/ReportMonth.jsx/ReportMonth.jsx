import { ReportWrap, LinkText, MonthText, PeriodText } from "./ReportMonth.styled"


export default function ReportMonth() {
    return (
        <>
            <ReportWrap>
                <LinkText>Main Paige</LinkText>
            </ReportWrap>
            <ReportWrap>
                <p>Balance:</p>
            </ReportWrap>
            <ReportWrap>
                <PeriodText>Current Period:</PeriodText>
                <MonthText>NOVEMBER 2019</MonthText>
            </ReportWrap>
        </>
    )
}