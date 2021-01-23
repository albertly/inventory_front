import Button from '@material-ui/core/Button';
import {Link} from  'react-router-dom';

function Home() {

  // onClick={clickHandler}
  //   const clickHandler = () => {

  //   }

    return (
      <div>
        This is Home Page

        <Button variant="contained" color="primary" >
          <Link to="/about"> About</Link>
        </Button>

      </div>
    );
  }
  
export default Home;