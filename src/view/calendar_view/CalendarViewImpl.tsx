import DayListOfMonthView from "../../entity/DayListOfMonthView";
import MonthView from "./MonthView";
import {useAppSelector} from "../../redux/hooks";
import {selectShowItem} from "../../redux/showItemSlice";
import CalendarViewHeader from "./CalendarViewHeader";

export default function CalendarViewImpl() {
    let showItem = useAppSelector(selectShowItem);
    let dayListOfMonthView: DayListOfMonthView = new DayListOfMonthView(showItem.year, showItem.month);
    return <>
        <CalendarViewHeader/>
        <MonthView dayListOfMonthView={dayListOfMonthView}/>
    </>

}