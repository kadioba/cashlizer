import { useState } from "react";
import { NavigationButton, NavigationContainer } from "./styles";

export default function Navigation(props) {

    const [actualPage, setActualPage] = useState("dashboard");

    const pages = ["dashboard", "taxes", "investments", "reports", "cashflow", "projections"];

    return (
        <>
            <NavigationContainer>
                {pages.map(page => {
                    return (
                        <NavigationButton
                            value={page}
                            actualPage={actualPage}
                            onClick={() => setActualPage(page)}
                        >
                            {page}
                        </NavigationButton>
                    );
                })}
            </NavigationContainer>
        </>
    );
}