const RatingField = (lavel: string, value: number, handleRatingChange: any) => {
  return (
    <div>
      <h3>{lavel}</h3>
      <button
        type="button"
        key={value}
        onClick={() => handleRatingChange(value)}
      >
        {value}
      </button>
    </div>
  );
};

export default RatingField;
