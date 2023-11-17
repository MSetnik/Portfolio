import { Grid, Cell } from "react-mdl";

const Certificates = ({certificates}) => {
    console.log(certificates)
    return (

        <Grid style={{marginBottom: -30, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Cell col={6} style={{textAlign: 'center'}}>
                <div>
                    <p style={{fontWeight: 'bold'}}>Naziv certifikata</p>
                    {
                        certificates.map((o,i) => (
                            <p key={i}>{i+1 + ". " + o.name}</p>
                        ))
                    }
                </div>
                
            </Cell>

            <Cell col={6} style={{textAlign: 'center'}}>
                <div>
                    <p style={{fontWeight: 'bold'}}>Datum polaganja</p>
                    {
                        certificates.map((o,i) => (
                            <p key={i}>{i+1 + ". " +o.date}</p>
                        ))
                    }
                </div>
            </Cell>
        </Grid>
    );
}

export default Certificates;
