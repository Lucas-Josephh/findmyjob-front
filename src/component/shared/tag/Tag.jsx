import ContractEnum from '../../models/ContractEnum'
import WorkEnum from '../../models/WorkEnum';
import './Tag.scss'

const normalize = value =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

export default function Tag({ tag }) {
  if (!tag) return null;

  const normalizedTag = normalize(tag);

  const enums = 
    [
      ...Object.values(ContractEnum),
      ...Object.values(WorkEnum)
    ];

  const matchedTag = enums.find(
    enumTag => normalize(enumTag) === normalizedTag
  );

  if (!matchedTag) return null;

  const classSuffix = normalize(matchedTag);

  return (
    <div className={`extranet-tag_general extranet-tag_${classSuffix}`}>
      {matchedTag}
    </div>
  );
}
