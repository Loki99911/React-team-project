// export default function Expenses() {
//     return <div>Expenses...</div>;
// };

import { Main } from 'components/Main/Main';
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
            <Main />
        </>
    );
};

export default Expenses;