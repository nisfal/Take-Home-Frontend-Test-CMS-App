import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { addGroup, deleteGroup, addMenu, deleteMenu } from '../redux/groupSlice';
import { v4 as uuidv4 } from 'uuid';

export default function SettingsPage() {
  const groups = useSelector((state: RootState) => state.group.groups);
  const dispatch = useDispatch();

  const handleAddGroup = () => {
    const name = prompt('Nama Group baru?');
    if (name) {
      dispatch(addGroup({ id: uuidv4(), name, menus: [] }));
    }
  };

  const handleDeleteGroup = (id: string) => {
    if (confirm('Hapus group ini?')) {
      dispatch(deleteGroup(id));
    }
  };

  const handleAddMenu = (gid: string) => {
    const menu = prompt('Nama menu?');
    if (menu) {
      dispatch(addMenu({ groupId: gid, menu }));
    }
  };

  const handleDeleteMenu = (gid: string, menu: string) => {
    dispatch(deleteMenu({ groupId: gid, menu }));
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <button onClick={handleAddGroup} className="bg-green-600 text-white px-3 py-1 rounded">Tambah Group</button>
      {groups.map(g => (
        <div key={g.id} className="border p-3 rounded">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">{g.name}</h2>
            <div>
              <button onClick={() => handleAddMenu(g.id)} className="mr-2 text-blue-600">+ Menu</button>
              <button onClick={() => handleDeleteGroup(g.id)} className="text-red-600">Hapus Group</button>
            </div>
          </div>
          <ul className="mt-2 list-disc list-inside">
            {g.menus.map(m => (
              <li key={m} className="flex justify-between">
                {m}
                <button onClick={() => handleDeleteMenu(g.id, m)} className="text-red-500">x</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
