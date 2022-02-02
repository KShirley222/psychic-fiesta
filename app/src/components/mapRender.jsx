import React from 'react';
import MapGenerator from './mapGeneration';

function MapRender() {
    const mapTable = MapGenerator(7, 5);
    // const mapTable = [
    //   [0,0,1,1,0],
    //   [0,0,0,0,0],
    //   [1,0,1,0,1],
    //   [0,0,1,0,0],
    //   [0,0,1,0,0]
    // ];
    return(
      <div className="grid">
        {mapTable.map((row, rowId) => {;
          return (
            <div key={rowId} className='gridRow'>
              {row.map((node, nodeId) => {
                let nodeColor = '';
                if(node > 1) {
                  nodeColor = 'red';
                } else if( node === 1){
                  nodeColor = 'blue';
                } else {
                  nodeColor = 'gray';
                }
                return (
                  <div key={nodeId} className='gridNode' style={{backgroundColor: nodeColor}}></div>
                )
              })}
            </div>
          )
        })}
      </div>
    );
}



export default MapRender;