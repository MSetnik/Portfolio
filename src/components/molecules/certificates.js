import { Grid, Cell } from "react-mdl";

const Certificates = ({name, date}) => {
    return (
        <Grid style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Cell col={6} style={{textAlign: 'center'}}>
            {/* <p style={{ marginBottom: "-10px" }}>
            </p> */}
                {name}
            </Cell>

            <Cell col={6} style={{textAlign: 'center'}}>
                {date}
            {/* <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
            <p>{this.props.schoolDescription}</p>
            <p>{this.props.schoolWeb}</p> */}
            </Cell>
        </Grid>
      

    // <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
    //     <div >
    //         {name}
    //     </div>
    //     <div>
    //         {date}
    //     </div>
    // </div>
    );
}

export default Certificates;
