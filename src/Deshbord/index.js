import { backEndRespons } from '../utils/BackEndData/BackEnd';
import Swapnil from '../component/Cmpt/Swapnil';
import Jay from '../component/Cmpt/Jay';
import Milan from '../component/Cmpt/Milan';
import Khushal from '../component/Cmpt/Khushal';
import Ravi from '../component/Cmpt/Ravi';
import Arpit from '../component/Cmpt/Arpit';
import Sagar from '../component/Cmpt/Sagar';
import Neel from '../component/Cmpt/Neel';
import Nirav from '../component/Cmpt/Nirav';
import '../assets/css/_DeshBord.css'

function Deshbord({ selectedCategory,flag}) {
  console.log(flag)
  const componentMap = [
    {
      key: 'Swapnil Patel',
      component: Swapnil
    },
    {
      key: 'Jay Zalavadiya',
      component: Jay
    },
    {
      key: 'Milan Kotadiya',
      component: Milan
    },
    {
      key: 'Khushal Shiyal',
      component: Khushal
    },
    {
      key: 'Ravi Vora',
      component: Ravi
    },
    {
      key: 'Arpit Ubhadiya',
      component: Arpit
    },
    {
      key: 'Sagar Dholariya',
      component: Sagar
    },
    {
      key: 'Neel Bhavsar',
      component: Neel
    },
    {
      key: 'Nirav Ghinaiya',
      component: Nirav
    }
  ];

  const sortedComponents = backEndRespons[0].components
    .filter((component) => {
      if (selectedCategory === 'all') {
        return component.render;
      } else {
        return component.render && component.department === selectedCategory;
      }
    })
    .sort((a, b) => a.order - b.order);

  return (
    <div className={`MainDashBord ${flag ? 'WhiteBackground' : 'BlackBackground'}`}  >

      {sortedComponents.map((component, index) => {
        const { component: Component } = componentMap.find(cmp => cmp.key === component.name);

        const componentStyle = {
          color: "white",
          backgroundColor: 'rgb(44 45 47)',
          width: component.width,
          border: '2px solid black',
          borderRadius: '5px',
          marginTop: '10px',
          fontSize: '16px',
          fontWeight: 'bold',
          textAlign: 'center',
          height: '501px'
        };

        return (
          <div key={component.id} style={componentStyle} >
            <Component />
          </div>
        );
      })}

    </div>
  );
}

export default Deshbord;
