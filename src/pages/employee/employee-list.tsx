import { useCallback, useEffect, useMemo, useState, FC, Fragment, MouseEvent } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import {
  Button,
  Chip,
  Dialog,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';

// third-party
import { PatternFormat } from 'react-number-format';
import {
  useFilters,
  useExpanded,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
  usePagination,
  Column,
  HeaderGroup,
  Row,
  Cell,
  HeaderProps
} from 'react-table';

// project import
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import { PopupTransition } from 'components/@extended/Transitions';
import {
  CSVExport,
  HeaderSort,
  IndeterminateCheckbox,
  SortingSelect,
  TablePagination,
  TableRowSelection
} from 'components/third-party/ReactTable';

import AddCustomer from 'sections/apps/employee/AddCustomer';
import CustomerView from 'sections/apps/employee/CustomerView';
import AlertCustomerDelete from 'sections/apps/employee/AlertCustomerDelete';

import makeData from 'data/react-table';
import { renderFilterTypes, GlobalFilter } from 'utils/react-table';

// assets
import { CloseOutlined, PlusOutlined, EyeTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

const avatarImage = require.context('assets/images/users', true);

// ==============================|| REACT TABLE ||============================== //

interface Props {
  columns: Column[];
  data: [];
  handleAdd: () => void;
  renderRowSubComponent: FC<any>;
  getHeaderProps: (column: HeaderGroup) => {};
}

function ReactTable({ columns, data, renderRowSubComponent, handleAdd, getHeaderProps }: Props) {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const filterTypes = useMemo(() => renderFilterTypes, []);
  const sortBy = { id: 'fatherName', desc: false };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setHiddenColumns,
    allColumns,
    visibleColumns,
    rows,
    page,
    gotoPage,
    setPageSize,
    state: { globalFilter, selectedRowIds, pageIndex, pageSize, expanded },
    preGlobalFilteredRows,
    setGlobalFilter,
    setSortBy,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: { pageIndex: 0, pageSize: 10, hiddenColumns: ['avatar', 'email'], sortBy: [sortBy] }
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  useEffect(() => {
    if (matchDownSM) {
      setHiddenColumns(['age', 'contact', 'visits', 'email', 'status', 'avatar']);
    } else {
      setHiddenColumns(['avatar', 'email']);
    }
    // eslint-disable-next-line
  }, [matchDownSM]);

  return (
    <Fragment>
      <TableRowSelection selected={Object.keys(selectedRowIds).length} />
      <Stack spacing={3}>
        <Stack
          direction={matchDownSM ? 'column' : 'row'}
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 3, pb: 0 }}
        >
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            size="small"
          />
          <Stack direction={matchDownSM ? 'column' : 'row'} alignItems="center" spacing={1}>
            <SortingSelect sortBy={sortBy.id} setSortBy={setSortBy} allColumns={allColumns} />
            <Button variant="contained" startIcon={<PlusOutlined />} onClick={handleAdd} size="small">
              新規追加
            </Button>
            <CSVExport
              data={selectedFlatRows.length > 0 ? selectedFlatRows.map((d: Row) => d.original) : data}
              filename={'customer-list.csv'}
            />
          </Stack>
        </Stack>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup: HeaderGroup<{}>) => (
              <TableRow {...headerGroup.getHeaderGroupProps()} sx={{ '& > th:first-of-type': { width: '58px' } }}>
                {headerGroup.headers.map((column: HeaderGroup) => (
                  <TableCell {...column.getHeaderProps([{ className: column.className }, getHeaderProps(column)])}>
                    <HeaderSort column={column} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row: Row, i: number) => {
              prepareRow(row);
              const rowProps = row.getRowProps();

              return (
                <Fragment key={i}>
                  <TableRow
                    {...row.getRowProps()}
                    onClick={() => {
                      row.toggleRowSelected();
                    }}
                    sx={{ cursor: 'pointer', bgcolor: row.isSelected ? alpha(theme.palette.primary.lighter, 0.35) : 'inherit' }}
                  >
                    {row.cells.map((cell: Cell) => (
                      <TableCell {...cell.getCellProps([{ className: cell.column.className }])}>{cell.render('Cell')}</TableCell>
                    ))}
                  </TableRow>
                  {row.isExpanded && renderRowSubComponent({ row, rowProps, visibleColumns, expanded })}
                </Fragment>
              );
            })}
            <TableRow sx={{ '&:hover': { bgcolor: 'transparent !important' } }}>
              <TableCell sx={{ p: 2, py: 3 }} colSpan={9}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageSize={pageSize} pageIndex={pageIndex} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
    </Fragment>
  );
}

// ==============================|| CUSTOMER - LIST ||============================== //

const EmployeeList = () => {
  // const [dataList, setDataList] = useState([]);
  // const [loading, setLoading] = useState(true); // ローディング状態を管理

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/');
  //       if (!response.ok) {
  //         throw new Error('データの取得に失敗しました');
  //       }
  //       const data = await response.json();
  //       setDataList(data);
  //       setLoading(false); // データ取得が完了したらローディングを終了
  //     } catch (error) {
  //       console.error('エラー:', error);
  //       setLoading(false); // エラーが発生した場合もローディングを終了
  //       // エラーが発生したらエラー画面を表示
  //       return <div>ERROR...</div>; // あるいは適切なローディングコンポーネントを使用
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(dataList);

  const theme = useTheme();

  const data = useMemo(() => makeData(0), []);
  data.push({
    id: 1,
    firstName: 'ヤマダ',
    lastName: 'タカシ',
    email: 'dsghyjyjuku@gmail.com',
    age: 29,
    role: '課長',
    visits: 7772,
    progress: 53,
    status: '0',
    orderStatus: '正社員',
    contact: '08023654785',
    country: 'システムエンジニア',
    address: '北海道千歳市1-5-9',
    fatherName: '山田 隆',
    about: 'Bis pomozfo ar alo me fudtotka rah nuljal gegaseg gijvaruf pemjemu uzewoltif pi ohimu okes toren ahhoj gihka.',
    avatar: 4,
    skills: ['ES6', 'Javascript', 'UI Design', 'React', 'Web App'],
    time: 'システムエンジニア'
  });
  data.push({
    id: 2,
    firstName: 'スズキ',
    lastName: 'ユウヤ',
    email: 'shjghiewfwf@gmail.com',
    age: 24,
    role: '主任',
    visits: 7772,
    progress: 53,
    status: '2',
    orderStatus: '派遣社員',
    contact: '09035698545',
    country: 'コールセンター',
    address: '北海道江別市1-5-9',
    fatherName: '鈴木 裕也',
    about: 'Bis pomozfo ar alo me fudtotka rah nuljal gegaseg gijvaruf pemjemu uzewoltif pi ohimu okes toren ahhoj gihka.',
    avatar: 2,
    skills: ['ES6', 'Javascript', 'UI Design', 'React', 'Web App'],
    time: 'システムエンジニア'
  });
  data.push({
    id: 3,
    firstName: 'ナカムラ',
    lastName: 'サオリ',
    email: 'fdsgrhjuki@gmail.com',
    age: 21,
    role: '主任',
    visits: 7772,
    progress: 53,
    status: '1',
    orderStatus: 'フリーランス',
    contact: '08054589856',
    country: 'コールセンター',
    address: '北海道札幌市中央区1-5-9',
    fatherName: '中村 早織',
    about: 'Bis pomozfo ar alo me fudtotka rah nuljal gegaseg gijvaruf pemjemu uzewoltif pi ohimu okes toren ahhoj gihka.',
    avatar: 2,
    skills: ['ES6', 'Javascript', 'UI Design', 'React', 'Web App'],
    time: 'システムエンジニア'
  });
  const [open, setOpen] = useState<boolean>(false);
  const [customer, setCustomer] = useState<any>(null);
  const [customerDeleteId, setCustomerDeleteId] = useState<any>('');
  const [add, setAdd] = useState<boolean>(false);

  const handleAdd = () => {
    setAdd(!add);
    if (customer && !add) setCustomer(null);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const columns = useMemo(
    () => [
      {
        title: 'Row Selection',
        Header: ({ getToggleAllPageRowsSelectedProps }: HeaderProps<{}>) => (
          <IndeterminateCheckbox indeterminate {...getToggleAllPageRowsSelectedProps()} />
        ),
        accessor: 'selection',
        Cell: ({ row }: any) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
        disableSortBy: true
      },
      {
        Header: '社員ID',
        accessor: 'id',
        className: 'cell-center'
      },
      {
        Header: '氏名',
        accessor: 'fatherName',
        Cell: ({ row }: { row: Row }) => {
          const { values } = row;
          return (
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Avatar alt="Avatar 1" size="sm" src={avatarImage(`./avatar-${!values.avatar ? 1 : values.avatar}.png`)} />
              <Stack spacing={0}>
                <Typography variant="subtitle1">{values.fatherName}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {values.email}
                </Typography>
              </Stack>
            </Stack>
          );
        }
      },
      {
        Header: 'アイコン',
        accessor: 'avatar',
        disableSortBy: true
      },
      {
        Header: 'メールアドレス',
        accessor: 'email'
      },
      {
        Header: '電話番号',
        accessor: 'contact',
        Cell: ({ value }: { value: number }) => <PatternFormat displayType="text" format="###-####-####" mask="_" defaultValue={value} />
      },
      {
        Header: '年齢',
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: '職種',
        accessor: 'country'
      },
      {
        Header: '勤務状況',
        accessor: 'status',
        Cell: ({ value }: { value: string }) => {
          switch (value) {
            case '0':
              return <Chip color="error" label="休" size="small" variant="light" />;
            case '1':
              return <Chip color="success" label="退勤" size="small" variant="light" />;
            case '2':
            default:
              return <Chip color="info" label="出勤" size="small" variant="light" />;
          }
        }
      },
      {
        Header: 'アクション',
        className: 'cell-center',
        disableSortBy: true,
        Cell: ({ row }: { row: Row<{}> }) => {
          const collapseIcon = row.isExpanded ? (
            <CloseOutlined style={{ color: theme.palette.error.main }} />
          ) : (
            <EyeTwoTone twoToneColor={theme.palette.secondary.main} />
          );
          return (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
              <Tooltip title="View">
                <IconButton
                  color="secondary"
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    row.toggleRowExpanded();
                  }}
                >
                  {collapseIcon}
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton
                  color="primary"
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    setCustomer(row.values);
                    handleAdd();
                  }}
                >
                  <EditTwoTone twoToneColor={theme.palette.primary.main} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  color="error"
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    handleClose();
                    setCustomerDeleteId(row.values.id);
                  }}
                >
                  <DeleteTwoTone twoToneColor={theme.palette.error.main} />
                </IconButton>
              </Tooltip>
            </Stack>
          );
        }
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  const renderRowSubComponent = useCallback(({ row }: { row: Row<{}> }) => <CustomerView data={data[Number(row.id)]} />, [data]);
  // if (loading) {
  //   // ローディング中の場合、ローディングスピナーやメッセージを表示
  //   return <div>Loading...</div>; // あるいは適切なローディングコンポーネントを使用
  // }
  return (
    <MainCard content={false}>
      <ScrollX>
        <ReactTable
          columns={columns}
          data={data}
          handleAdd={handleAdd}
          renderRowSubComponent={renderRowSubComponent}
          getHeaderProps={(column: HeaderGroup) => column.getSortByToggleProps()}
        />
      </ScrollX>
      <AlertCustomerDelete title={customerDeleteId} open={open} handleClose={handleClose} />
      {/* add customer dialog */}
      <Dialog
        maxWidth="sm"
        TransitionComponent={PopupTransition}
        keepMounted
        fullWidth
        onClose={handleAdd}
        open={add}
        sx={{ '& .MuiDialog-paper': { p: 0 }, transition: 'transform 225ms' }}
        aria-describedby="alert-dialog-slide-description"
      >
        <AddCustomer customer={customer} onCancel={handleAdd} />
      </Dialog>
    </MainCard>
  );
};

export default EmployeeList;
