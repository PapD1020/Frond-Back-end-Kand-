﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ReactJs_Kliens.ServiceReference1 {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="Record", Namespace="http://schemas.datacontract.org/2004/07/Server")]
    [System.SerializableAttribute()]
    [System.Runtime.Serialization.KnownTypeAttribute(typeof(ReactJs_Kliens.ServiceReference1.Kutyus))]
    public partial class Record : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int idField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int id {
            get {
                return this.idField;
            }
            set {
                if ((this.idField.Equals(value) != true)) {
                    this.idField = value;
                    this.RaisePropertyChanged("id");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="Kutyus", Namespace="http://schemas.datacontract.org/2004/07/Server")]
    [System.SerializableAttribute()]
    public partial class Kutyus : ReactJs_Kliens.ServiceReference1.Record {
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private byte eletkorField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string fajtaField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string gazdiField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private byte labakSzamaField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private bool nemeField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string nevField;
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public byte eletkor {
            get {
                return this.eletkorField;
            }
            set {
                if ((this.eletkorField.Equals(value) != true)) {
                    this.eletkorField = value;
                    this.RaisePropertyChanged("eletkor");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string fajta {
            get {
                return this.fajtaField;
            }
            set {
                if ((object.ReferenceEquals(this.fajtaField, value) != true)) {
                    this.fajtaField = value;
                    this.RaisePropertyChanged("fajta");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string gazdi {
            get {
                return this.gazdiField;
            }
            set {
                if ((object.ReferenceEquals(this.gazdiField, value) != true)) {
                    this.gazdiField = value;
                    this.RaisePropertyChanged("gazdi");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public byte labakSzama {
            get {
                return this.labakSzamaField;
            }
            set {
                if ((this.labakSzamaField.Equals(value) != true)) {
                    this.labakSzamaField = value;
                    this.RaisePropertyChanged("labakSzama");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public bool neme {
            get {
                return this.nemeField;
            }
            set {
                if ((this.nemeField.Equals(value) != true)) {
                    this.nemeField = value;
                    this.RaisePropertyChanged("neme");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string nev {
            get {
                return this.nevField;
            }
            set {
                if ((object.ReferenceEquals(this.nevField, value) != true)) {
                    this.nevField = value;
                    this.RaisePropertyChanged("nev");
                }
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServiceReference1.IService1")]
    public interface IService1 {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/EgyKutyaGet", ReplyAction="http://tempuri.org/IService1/EgyKutyaGetResponse")]
        ReactJs_Kliens.ServiceReference1.Kutyus EgyKutyaGet();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/EgyKutyaGet", ReplyAction="http://tempuri.org/IService1/EgyKutyaGetResponse")]
        System.Threading.Tasks.Task<ReactJs_Kliens.ServiceReference1.Kutyus> EgyKutyaGetAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/EgyKutyaPost", ReplyAction="http://tempuri.org/IService1/EgyKutyaPostResponse")]
        ReactJs_Kliens.ServiceReference1.Kutyus EgyKutyaPost();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/EgyKutyaPost", ReplyAction="http://tempuri.org/IService1/EgyKutyaPostResponse")]
        System.Threading.Tasks.Task<ReactJs_Kliens.ServiceReference1.Kutyus> EgyKutyaPostAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/KutyaLista", ReplyAction="http://tempuri.org/IService1/KutyaListaResponse")]
        ReactJs_Kliens.ServiceReference1.Kutyus[] KutyaLista();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IService1/KutyaLista", ReplyAction="http://tempuri.org/IService1/KutyaListaResponse")]
        System.Threading.Tasks.Task<ReactJs_Kliens.ServiceReference1.Kutyus[]> KutyaListaAsync();
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IService1Channel : ReactJs_Kliens.ServiceReference1.IService1, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class Service1Client : System.ServiceModel.ClientBase<ReactJs_Kliens.ServiceReference1.IService1>, ReactJs_Kliens.ServiceReference1.IService1 {
        
        public Service1Client() {
        }
        
        public Service1Client(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public Service1Client(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public Service1Client(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public Service1Client(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public ReactJs_Kliens.ServiceReference1.Kutyus EgyKutyaGet() {
            return base.Channel.EgyKutyaGet();
        }
        
        public System.Threading.Tasks.Task<ReactJs_Kliens.ServiceReference1.Kutyus> EgyKutyaGetAsync() {
            return base.Channel.EgyKutyaGetAsync();
        }
        
        public ReactJs_Kliens.ServiceReference1.Kutyus EgyKutyaPost() {
            return base.Channel.EgyKutyaPost();
        }
        
        public System.Threading.Tasks.Task<ReactJs_Kliens.ServiceReference1.Kutyus> EgyKutyaPostAsync() {
            return base.Channel.EgyKutyaPostAsync();
        }
        
        public ReactJs_Kliens.ServiceReference1.Kutyus[] KutyaLista() {
            return base.Channel.KutyaLista();
        }
        
        public System.Threading.Tasks.Task<ReactJs_Kliens.ServiceReference1.Kutyus[]> KutyaListaAsync() {
            return base.Channel.KutyaListaAsync();
        }
    }
}
