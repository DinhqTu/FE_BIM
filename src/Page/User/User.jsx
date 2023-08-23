import UserCard from '../../components/UserCard';

function User() {
  return (
    <section>
      <div className="flex justify-between">
        <h1>NGƯỜI DÙNG</h1>
        <input
          type="search"
          name=""
          id=""
          placeholder="Tìm kiếm . . ."
          className="px-4 border border-2  rounded-full w-[280px] h-8 focus:border-transparent"
        />
        <div>
          <button className="border p-2 mr-4 hover:border-[#3b5999] hover:text-[#3b5999]">
            Gửi lời mời
          </button>
          <button className="border p-2 hover:border-[#3b5999] hover:text-[#3b5999]">
            Danh sách mới
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 mt-8">
        {Array.from({ length: 20 }).map((_, i) => (
          <UserCard key={i} />
        ))}
      </div>
    </section>
  );
}

export default User;
