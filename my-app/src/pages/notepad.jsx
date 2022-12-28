const employees = ["Diana", "Mark", "Kevin"];

export const Employees = () => {
    return(
        <div>
            {
                employees.map((employee) =>
                    <p>{employee}</p>
                )
            }
        </div>
    );
}