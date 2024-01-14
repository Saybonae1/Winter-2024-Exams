//fix and look
const filterProperties = (object, ...allowedProperties) =>
{

  const properties = Object.keys(object);

  for (const property of properties)
  {

    if (!allowedProperties.includes(property)) delete object[property];

  }


  return object;

};


module.exports = filterProperties;
