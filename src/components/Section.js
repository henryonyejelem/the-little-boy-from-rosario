function Section(props){
    return(
        <div className="absolute ">
            <div>{props.children}</div>
        </div>
    );
}
export default Section;