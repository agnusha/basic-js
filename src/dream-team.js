module.exports = function createDreamTeam(members) {
  return (Array.isArray(members)) ?
    members.map(item => {
      if (typeof item === 'string')
        return item.trim()[0].toUpperCase();
    }).sort().join('') : false;
};