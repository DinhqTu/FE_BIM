import GroupCard from '../../components/GroupCard';

function Group() {
  return (
    <section>
      <div className="flex justify-between">
        <h1>DANH SÁCH NHÓM NGƯỜI DÙNG</h1>
        <button className="border p-2 hover:border-[#3b5999] hover:text-[#3b5999]">Thêm mới</button>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <GroupCard key={i} />
        ))}
      </div>
    </section>
  );
}

export default Group;
