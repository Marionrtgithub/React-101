function List(props){

    const category = props.category;
    const itemlist = props.items; 
    const Listitems = itemlist.map(item =><li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.categories}</b> </li>)
    return (
    <> 
        <h3 className="list-category">{category}</h3> 
        <ol className="list-items">{Listitems}</ol>
     </> 
     );  

    }
export default List
