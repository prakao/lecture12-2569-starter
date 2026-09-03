import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import Footer from "../components/Footer";
import { type TaskCardProps } from "../libs/Todolist";
import TaskCard from "../components/TaskCard";

export default function TodolistPage() {
  // 📋 src/pages/TodolistPage.tsx
  const title = "Todo List";
  const tasks: TaskCardProps[] = [
    /* ...ToDolist... */
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
  ];
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 p-0">
          <Sidebar userName="chanadda" type="admin" />
        </div>

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          {/* ══ [ขั้นที่ 2A ] แยก Component "Header" (ไม่มี props) ══════════════════
          <Header />
          */}
          {/* <header className="text-white bg-secondary p-2 w-100">
            <p className="m-4">lecture12-2569</p>
          </header> */}
          <Header />

          <main className="flex-grow-1 p-4">
            <div className="container">
              {/* [ขั้นที่ 1] เปลี่ยน 2 บรรทัดนี้ให้ดึงค่าจากตัวแปรผ่าน { } */}
              <h2 className="text-center">{title}</h2>
              <p className="text-center text-muted">
                ทั้งหมด {tasks.length} งาน
              </p>
              {/* ══ [ขั้นที่ 2B] แยก Component "TaskInput" (ไม่มี props) ══════════
                  <TaskInput />
              */}
              {/* <div className="d-flex my-3">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Insert a task here.."
                />
                <button className="btn btn-primary px-4">Add</button>
              </div> */}
              <TaskInput />
              {/* ══ [ขั้นที่ 4] แยก Component "TaskCard" + ส่ง props + .map() ═════
                 {tasks.map((task) => <TaskCard key={task.id} {...} />)}
              */}
              {/* <div className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <h5 className="card-title m-0">Read a book</h5>
                    </div>
                    <div className="col-lg-4">
                      <p className="card-text m-0 text-muted">
                        Vite + React + Bootstrap + TS
                      </p>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-success w-100">Done</button>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-danger w-100">Delete</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <h5 className="card-title m-0">Write code</h5>
                    </div>
                    <div className="col-lg-4">
                      <p className="card-text m-0 text-muted">
                        Finish project for class
                      </p>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-success w-100">Done</button>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-danger w-100">Delete</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <h5 className="card-title m-0 text-decoration-line-through">
                        Deploy app
                      </h5>
                    </div>
                    <div className="col-lg-4">
                      <p className="card-text m-0 text-muted">
                        Push project to GitHub Pages
                      </p>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-success w-100">Done</button>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-danger w-100">Delete</button>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* // 📋 src/pages/TodolistPage.tsx วนloopสร้างcard*/}
              {tasks.map((task) => (
                <TaskCard
                  key={task.id} //ข้อมูลต้องเลขไม่ซ้ำกัน
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  isDone={task.isDone}
                />
              ))}
            </div>
          </main>
          {/* ══ [ขั้นที่ 3] แยก Component "Footer" + ส่ง props ════════
               <Footer year="2026" fullName="..." studentId="..." />
          */}
          {/* <footer className="text-center w-100">
            <p className="text-white bg-secondary p-4 m-0">
              Copyright © 2026 chanadda thanyaratthanon 6706200999
            </p>
          </footer> */}
          <Footer
            year="2026"
            fullName="chanadda thanyaratthanon"
            studentId="670620999"
          />
        </div>
      </div>
    </div>
  );
}
