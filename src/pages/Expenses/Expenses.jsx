import { ExpencePart } from 'components/ExpIncPart/ExpencePart';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    getExpenseCategories,
    getExpenseStats,
} from 'redux/Transaction/transactionOperations';

const Expenses = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExpenseCategories());
        dispatch(getExpenseStats());
    }, [dispatch]);
    return (
        <>
            <ExpencePart />
        </>
    );
};

export default Expenses;