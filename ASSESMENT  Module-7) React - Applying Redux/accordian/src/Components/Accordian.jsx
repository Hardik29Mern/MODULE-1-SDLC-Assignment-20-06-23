import AccordianItem from './AccordianItem';

const Accordion = ({ items }) => {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordianItem key={index} title={item.title} content={item.content} />
                
            ))}
        </div>
    );
};
export default Accordion;
