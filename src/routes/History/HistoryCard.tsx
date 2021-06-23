import { History } from "../../types/types";

interface IProps {
  history: History;
  active: boolean;
  handleClick: (selection: History) => void;
}

const HistoryCard = ({ history, active, handleClick }: IProps) => {
  return (
    <div
      className={`card card-history ${active ? "active" : ""}`}
      onClick={() => handleClick(history)}
    >
      <div className="card-history_header">
        <div className="card__label">{history.title}</div>
        <div className="card__text">
          <span>{`${getMonth2Digits(
            history.start
          )}/${history.start.getFullYear()}`}</span>
          {history.end ? (
            <span>{` - ${getMonth2Digits(
              history.end
            )}/${history.end.getFullYear()}`}</span>
          ) : (
            " ~"
          )}
        </div>
        <div className="card__label card-history_header_company">
          {history.at.name}
        </div>
      </div>
      {history.description && (
        <div className="card-history_content">
          <history.description />
        </div>
      )}
    </div>
  );
};

const getMonth2Digits = (date: Date) => {
  const m = date.getMonth() + 1;
  return m < 10 ? `0${m}` : m.toString();
};

export default HistoryCard;
