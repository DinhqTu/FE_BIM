import ButtonControl from '../../components/ButtonControl';

function Project() {
  return (
    <section>
      <div className="flex justify-between items-center mb-2">
        <h1>CÁC DỰ ÁN</h1>
        <button className="border border-[#3b5999] text-[#3b5999] hover:bg-[#3b5999] px-4 py-2">
          Thêm mới
        </button>
        <ButtonControl />
      </div>
      <div className="w-full bg-slate-400 h-[65vh]"></div>
    </section>
  );
}

export default Project;
