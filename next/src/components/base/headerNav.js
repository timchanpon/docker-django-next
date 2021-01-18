import Link from 'next/link';

function HeaderNav() {
  return (
    <nav>
      <Link href="/">
        <button className="header-nav-btn">Top</button>
      </Link>
      <Link href="/todos/todo-list">
        <button className="header-nav-btn">Todo List</button>
      </Link>
      <Link href="/users/user-info">
        <button className="header-nav-btn">User Info</button>
      </Link>
    </nav>
  );
}

export default HeaderNav;
