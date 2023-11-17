import { Grid, Cell } from "react-mdl";

const CertificatesEng = ({certificates}) => {
    return (

        <Grid style={{marginBottom: -30, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Cell col={6} style={{textAlign: 'center'}}>
                <div>
                    <p style={{fontWeight: 'bold'}}>Name of certificate</p>
                    {
                        certificates.map((o,i) => (
                            <p key={i}>{i+1 + ". " + o.name}</p>
                        ))
                    }
                </div>
                
            </Cell>

            <Cell col={6} style={{textAlign: 'center'}}>
                <div>
                    <p style={{fontWeight: 'bold'}}>Date</p>
                    {
                        certificates.map((o,i) => (
                            <p key={i}>{i+1 + ". " +o.date}</p>
                        ))
                    }
                </div>
            </Cell>
        </Grid>
        // <Grid style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        //     <Cell col={6} style={{textAlign: 'center'}}>
        //         {name}
        //     </Cell>

        //     <Cell col={6} style={{textAlign: 'center'}}>
        //         {date}
            
        //     </Cell>
        // </Grid>
    );
}

export default CertificatesEng;
