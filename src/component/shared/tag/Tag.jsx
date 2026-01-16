import ContractEnum from '../../models/ContractEnum'
import WorkEnum from '../../models/WorkEnum';
import LevelEnum from '../../models/LevelEnum';
import './Tag.scss'

const normalize = value =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

export default function Tag({ tag, icon }) {
  if (!tag) return null;

  const normalizedTag = normalize(tag);

  const enums = 
    [
      ...Object.values(ContractEnum),
      ...Object.values(WorkEnum),
      ... Object.values(LevelEnum)
    ];

  const matchedTag = enums.find(
    enumTag => normalize(enumTag) === normalizedTag
  );

  if (!matchedTag) return null;

  const classSuffix = normalize(matchedTag);

  return (
    <div className={`extranet-tag_general extranet-tag_${classSuffix}`}>
      {icon} {matchedTag}
    </div>
  );
}
