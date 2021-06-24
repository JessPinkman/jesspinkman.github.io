import { HistoryType } from "../../types/enums";
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
            " ~ On going"
          )}
        </div>
        <div className="card-history_header_company">{history.at.name}</div>
        <div
          className={`card__subtext ${
            history.type === HistoryType.SIDE ? "secondary" : ""
          } ${history.type === HistoryType.EDU ? "ternary" : ""}`}
        >
          {history.type}
        </div>
      </div>
      {history.description && (
        <div className="card-history_content">
          <h4 className="history-main">{history.description.main}</h4>
          {history.description.lines && (
            <ul className="history-lines">
              {history.description.lines.map((line) => (
                <li>{line}</li>
              ))}
            </ul>
          )}
          {history.description.special && (
            <div className="history-special">
              Special Achievement: {history.description.special}
            </div>
          )}
          {history.description.link && (
            <div className="history-link">
              <a
                href={history.description.link}
                target="_blank"
                rel="noreferrer"
              >
                <button>LINK</button>
              </a>
            </div>
          )}
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
