export default function DiaryCard({data}) {
  // const emotionElements = getElements(props.emotions);
  // const activityElements = getElements(props.activities);

  // function getElements(data) {
  //   return data.map((item) => {
  //     return (
  //       <div key={crypto.randomUUID()} className="icon-and-text-container">
  //         <div className="icon">{item.icon}</div>
  //         <div className="text-for-icon">{item.text}</div>
  //       </div>
  //     );
  //   });
  // }

  function getClasses() {
    const num = data.rating;

    switch (true) {
      case num <= 30:
        return "red";
      case num > 30 && num <= 50:
        return "yellow";
      case num > 50 && num <= 80:
        return "blue";
      case num > 80:
        return "green";
      default:
        return "";
    }
  }

  return (
    <div className="diary-card" key={data.id}>
      <div className="date-container">
        <p>{data.date}</p>
      </div>
      <div className="rating-container">
        <div className="rating-outline">
          <p>
            <span className="bold">Değerlendirme:</span> {data.rating}
            <span className="percent">%</span>
          </p>
          <div
            className={`rating-fill ${getClasses()}`}
            style={{ width: `${data.rating}%` }}
          ></div>
        </div>
      </div>
      <div className="emotion-and-activity-overall-container">
        <div className="emotion-container">
          <h3 className="container-title">Duygular</h3>
          <div className="list-of-elements-container">{data.emotions.map((emo)=> {
            return <div><span>{emo.icon}</span><span>{emo.text}</span></div>
          })}</div>
        </div>
        <div className="activity-container">
          <h3 className="container-title">Aktiviteler</h3>
          <div className="list-of-elements-container">{data.activities.map((act)=> {
            return <div><span>{act.icon}</span><span>{act.text}</span></div>
          })}</div>
        </div>
      </div>
      <div className="notes-container">
        <h3>Notlar</h3>
        <p>{data.note}</p>
      </div>
    </div>
  );
}
