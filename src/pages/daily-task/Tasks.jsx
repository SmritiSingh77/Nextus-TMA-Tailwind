import YTbadge from "../../assets/images/icon/youtube.png";
import TeleBadge from "../../assets/images/icon/telegram.png";
import Xbadge from "../../assets/images/icon/twitter.png";
import arrow from "../../assets/images/icon/chevron-right.png";

function Tasks({openModal, setOpenModal, setModalData}) {

    const handleOpenModal = (item) =>{
        setModalData(item);
        setOpenModal(!openModal);
    }
    const taskData = [
        {
            head: 'Social Tasks',
            items: [
                {
                    img: YTbadge,
                    title: `Watch & like “What is 
Nextus?” Video`,
                    getPoints: '10,000',
                    url: 'https://youtube.com'
                },
                {
                    img: Xbadge,
                    title: `Watch & like “What is 
Nextus?” Video`,
                    getPoints: '8,000',
                    url: 'https://twitter.com'
                }
                ,
                {
                    img: Xbadge,
                    title: `Watch & like “What is 
Nextus?” Video`,
                    getPoints: '8,000',
                    url: 'https://twitter.com'
                }
            ]
        },
        {
            head: 'Daily Tasks',
            items: [
                {
                    img: TeleBadge,
                    title: 'Join our Telegram',
                    getPoints: '10,000',
                    url: 'https://telegram.com'
                },
                {
                    img: Xbadge,
                    title: 'Join our Telegram',
                    getPoints: '10,000',
                    url: 'https://telegram.com'
                },
                {
                    img: YTbadge,
                    title: 'Join our Telegram',
                    getPoints: '10,000',
                    url: 'https://telegram.com'
                }
            ]
        }
    ];

    return (
        <div className="tasks-container">
            {taskData.map((task, taskIndex) => (
                <div key={taskIndex} className="mt-[20px]">
                    {/* Heading */}
                    <h3 className="text-center text-[16px] font-normal text-white">{task.head}</h3>

                    {/* Content Cards */}
                    {task.items.map((item, index) => (
                        <div
                            key={index}
                            className={`${index === task.items.length - 1 ? 'py-2 my-2' : 'py-2 my-2 border-b border-nextusGray'}`}
                            onClick={() => handleOpenModal(item)}
                        >
                            <div className="flex items-center gap-[10px]">
                                {/* Badge/Image */}
                                <div>
                                    <img src={item.img} alt="Badge" className="w-[45px]" />
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h4 className="text-[14px] font-semibold text-white">
                                        {item.title}
                                    </h4>
                                    <small className="text-[12px] text-brand font-semibold">
                                        {item.getPoints} Points
                                    </small>
                                </div>

                                {/* Arrow */}
                                <div>
                                    <img
                                        className="blur-sm-btn"
                                        src={arrow}
                                        alt="Arrow"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Tasks