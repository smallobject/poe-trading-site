//check if the item has a name and if note return the typeline for it
export function checkItemName(item) {
  if (item.name.length < 2) {
    return item.typeLine;
  }
  return item.name;
}
//check item actual rarity and return the right color
export function checkItemFrame(item) {
  switch (item.frameType) {
    case 1:
      return 'magic-item';
    case 2:
      return 'rare-item';
    case 3:
      return 'unique-item';
    default:
      return 'normal-item';
  }
}
//check frame/rarity type for hr color (hr color)
export function checkItemFrameHr(item) {
  switch (item.frameType) {
    case 1:
      return 'magic-hr';
    case 2:
      return 'rare-hr';
    case 3:
      return 'unique-hr';
    default:
      return 'normal-hr';
  }
}

const checkReq = (req, item) => {
  const ilvl = item.ilvl;
  switch (req.name) {
    case 'Level':
      return (
        <div className='font-light text-xs text-center text-gray-200'>
          {req.name}: {req.values[0][0]} ilvl: {ilvl}
        </div>
      );
    case 'Str':
      return (
        <div className='font-light text-xs text-center text-gray-200'>
          <span className='text-red-400'>
            {' '}
            {req.name}: {req.values[0][0]}
          </span>
        </div>
      );
    case 'Dex':
      return (
        <div className='font-light text-xs text-center text-gray-200'>
          <span className='text-green-400'>
            {' '}
            {req.name}: {req.values[0][0]}
          </span>
        </div>
      );
    case 'Int':
      return (
        <div className='font-light text-xs text-center text-gray-200'>
          <span className='text-blue-400'>
            {' '}
            {req.name}: {req.values[0][0]}
          </span>
        </div>
      );
    default:
      return '';
  }
};

export const checkItemLvlRequirements = ({ item }) => {
  if (!item.requirements) {
    return '';
  } else if (item.requirements.length > 1) {
    return item.requirements.map((req) => {
      return checkReq(req, item);
    });
  } else if (item.requirements.length === 1) {
    return (
      <div className='font-light text-xs text-center text-gray-200'>
        Level: {item.requirements[0].values[0][0]} ilvl: {item.ilvl}
      </div>
    );
  } else if (item.requirements && item.identified === false) {
    return '';
  }
};

const checkSocketColor = (socket) => {
  switch (socket.attr) {
    case 'S':
      return 'redSocket';
    case 'D':
      return 'greenSocket';
    case 'I':
      return 'blueSocket';
    case 'G':
      return 'whiteSocket';
    default:
      return '';
  }
};

// const checkLinks = (item) => {
//   const links = {};

//   for (let i = 0; i < item.sockets.length; i++) {
//     const socket = item.sockets[i];
//     links[`link${socket.group}`] = links[`link${socket.group}`] || [];
//     links[`link${socket.group}`].push(`Socket${i}`);
//   }
//   return links;
// };

export const renderLinks = ({ item }) => {
  //set default group to 0
  let currentGroup = null;

  // eslint-disable-next-line array-callback-return
  return item.sockets.map((socketGroup, index) => {
    if (currentGroup == null) {
      currentGroup = socketGroup.group;
    } else if (currentGroup === socketGroup.group) {
      return <div className={`sLink${index - 1}`}></div>;
    } else {
      currentGroup = socketGroup.group;
    }
  });
  // //go over the item and check socket group and render links
  // for (let [index, socketGroup] of item.sockets.entries()) {
  //   if (currentGroup === socketGroup.group) {
  //     //render link and move on
  //     //but this shit is actually breaking it, me returning this here
  //     return <div className={`link${index}`} />;
  //   } else if (socketGroup.group !== currentGroup) {
  //     //don't render link and set the group to the new one?
  //     currentGroup = socketGroup.group;
  //   }
  // }
};

const checkIfSocketFloatsRight = (socket) => {
  if (socket === 0) {
    return '';
  }
  if (socket % 2 !== 1) {
    return 'socketfloatRight';
  } else {
    return null;
  }
};

export const checkSocketsAndColors = ({ item }) => {
  return item.sockets.map((socket, index) => {
    return (
      <div
        className={`${checkSocketColor(socket)} ${checkIfSocketFloatsRight(
          index
        )} socket`}
      ></div>
    );
  });
};

// const renderSockets = (item) => {
//   const sockets = item.sockets;
//   return sockets.map((socket, index) => {
//     let linkHtml;
//     const nextSocket = sockets[index + 1],
//       socketHtml = renderSocket();

//     if(socket.group === nextSocket.group) {
//         linkHtml = renderLink(index);
//     }

//     return [socketHtml, linkHtml];
//   }).flat().filter(Boolean);
// };
